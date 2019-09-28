var Node = function (x, y) {
    this.x = x;
    this.y = y;
};

Node.prototype.x = 0;
Node.prototype.y = 0;
Node.prototype.f = 0;
Node.prototype.g = 0;
Node.prototype.h = 0;
Node.prototype.walkable = true;
Node.prototype.parent = null;
Node.prototype.costMultiplier = 1.0;

// Grid
var Grid = function (numCols, numRows) {
    this._numCols = numCols;
    this._numRows = numRows;
    this._nodes = [];
    for (var i = 0; i < this._numCols; i++) {
        this._nodes[i] = [];
        for (var j = 0; j < this._numRows; j++) {
            this._nodes[i][j] = new Node(i, j);
        }
    }
};


Grid.prototype.get_startNode = function () {
    return this._startNode;
};
Grid.prototype.get_endNode = function () {
    return this._endNode;
};
Grid.prototype.get_numCols = function () {
    return this._numCols;
};
Grid.prototype.get_numRows = function () {
    return this._numRows;
};
Grid.prototype._startNode = null;
Grid.prototype._endNode = null;
Grid.prototype._nodes = null;
Grid.prototype._numCols = 0;
Grid.prototype._numRows = 0;
Grid.prototype.getNode = function (x, y) {
    return this._nodes[x][y];
};
Grid.prototype.setEndNode = function (x, y) {
    this._endNode = this._nodes[x][y];
};
Grid.prototype.setStartNode = function (x, y) {
    this._startNode = this._nodes[x][y];
};
Grid.prototype.setWalkable = function (x, y, value) {
    this._nodes[x][y].walkable = value;
};
Grid.prototype.getWalkable = function (x, y) {
    return this._nodes[x][y].walkable;
}


// AStar
var AStar = function () {

};


AStar.prototype.get_path = function () {
    return this._path;
};
AStar.prototype.get_visited = function () {
    return this._closed.concat(this._open);
};

AStar.prototype._open = null;
AStar.prototype._closed = null;
AStar.prototype._grid = null;
AStar.prototype._endNode = null;
AStar.prototype._startNode = null;
AStar.prototype._path = null;
//AStar.prototype._heuristic = null;
AStar.prototype._straightCost = 1.0;
AStar.prototype._diagCost = Math.SQRT2;
AStar.prototype.findPath = function (grid) {
    this._grid = grid;
    this._open = [];
    this._closed = [];
    this._startNode = this._grid.get_startNode();
    this._endNode = this._grid.get_endNode();
    this._startNode.g = 0;
    this._startNode.h = this.diagonal(this._startNode);
    this._startNode.f = this._startNode.g + this._startNode.h;
    return this.search();
};
AStar.prototype.search = function () {
    var node = this._startNode;
    while (node != this._endNode) {
        var startX = Math.max(0, node.x - 1);
        var endX = Math.min(this._grid.get_numCols() - 1, node.x + 1);
        var startY = Math.max(0, node.y - 1);
        var endY = Math.min(this._grid.get_numRows() - 1, node.y + 1);
        for (var i = startX; i <= endX; i++) {
            for (var j = startY; j <= endY; j++) {
                var test = this._grid.getNode(i, j);
                if (test.x == node.x || test.y == node.y) {
                    if (test == node || !test.walkable) continue;
                }
                else {
                    if (test == node || !test.walkable || !this._grid.getNode(node.x, test.y).walkable || !this._grid.getNode(test.x, node.y).walkable) continue;
                }

                var cost = this._straightCost;
                if (!((node.x == test.x) || (node.y == test.y))) {
                    cost = this._diagCost;
                }
                var g = node.g + (cost * test.costMultiplier);
                var h = this.diagonal(test);
                var f = g + h;
                if (this.isOpen(test) || this.isClose(test)) {
                    if (test.f > f) {
                        test.f = f;
                        test.g = g;
                        test.h = h;
                        test.parent = node;
                    }
                }
                else {
                    test.f = f;
                    test.g = g;
                    test.h = h;
                    test.parent = node;
                    this._open.push(test);
                }
            }
        }
        this._closed.push(node);
        if (this._open.length == 0) {
            console.log("No Path Found");
            return false;
        }
        this._open.sort(function (a, b) {
            return a.f > b.f ? 1 : -1;
        });
        node = this._open.shift();
    }
    this.buildPath();
    return true;
};
AStar.prototype.buildPath = function () {
    this._path = [];
    var node = this._endNode;
    this._path.push(node);
    while (node != this._startNode) {
        node = node.parent;
        this._path.unshift(node);
    }
};
AStar.prototype.isOpen = function (node) {
    for (var i = 0; i < this._open.length; i++) {
        if (this._open[i] == node) {
            return true;
        }
    }
    return false;
};
AStar.prototype.isClose = function (node) {
    for (var i = 0; i < this._closed.length; i++) {
        if (this._closed[i] == node) {
            return true;
        }
    }
    return false;
};
AStar.prototype.diagonal = function (node) {
    var dx = Math.abs(node.x - this._endNode.x);
    var dy = Math.abs(node.y - this._endNode.y);
    var diag = Math.min(dx, dy);
    var straight = dx + dy;
    return this._diagCost * diag + this._straightCost * (straight - 2 * diag);
}

module.exports = {
    Node: Node,
    AStar: AStar,
    Grid: Grid
}