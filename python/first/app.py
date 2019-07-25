# encoding:utf-8


from flask import Flask,url_for,redirect,render_template,session,request,jsonify
from flask_sqlalchemy import SQLAlchemy
from utils import *
from flask import g
# from session import session
#from Flask-SQLAlchemy import sqlalchemy
# from flask.ext.sqlalchemy import SQLAlchemy

import config
import pymysql
import os
import datetime

app = Flask(__name__)
#app.config.from_object(config)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:root@127.0.0.1/demo4'
app.config['SQLALCHEMY_COMMIT_TEARDOWN'] = True
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN'] = True

app.config['SECRET_KEY'] = os.urandom(24)
app.config['PERMANENT_SESSION_LIFETIME'] = datetime.timedelta( days=7 )

# app.config['DIALECT'] = 'mysql'
# app.config['DRIVER'] = 'mysqldb'
# app.config['USERNAME'] = 'root'
# app.config['PASSWORD'] = 'root'
# app.config['HOST'] = '127.0.0.1'
# app.config['PORT'] = '3306'
# app.config['DATABASE'] = 'demo'
# app.config[''] = ''

db = SQLAlchemy( app )

class Article(db.Model):
    __tablename__ = 'article'
    id = db.Column( db.Integer, primary_key=True, autoincrement=True )
    title = db.Column( db.String(100) , nullable=False )
    content = db.Column( db.Text, nullable=False )

    tags = db.relationship( 'Tag', secondary='article_tag' , backref=db.backref('articles') )

class Tag( db.Model ):
    __tablename__ = 'tag'
    id = db.Column( db.Integer, primary_key=True, autoincrement=True )
    name = db.Column( db.String(100), nullable=False )

article_tag = db.Table( 'article_tag',
        db.Column( 'article_id',db.Integer , db.ForeignKey('article.id') , primary_key=True ),
        db.Column( 'tag_id' , db.Integer , db.ForeignKey( 'tag.id' ), primary_key=True )
        # tags = db.relationship( 'Tag' , secondary = 'article_tag' , backref = db.backref('articles') )
    )

db.create_all()

# class User(db.Model):
#     __tabelname__ = 'user'
#     id = db.Column( db.Integer, primary_key=True, autoincrement=True )
#     user = db.Column( db.String(100), nullable=False )
#
# class Article(db.Model):
#     __tablename__ = 'article'
#     id = db.Column( db.Integer, primary_key=True, autoincrement=True )
#     title = db.Column( db.String(100), nullable=False )
#     content = db.Column( db.Text, nullable=False )
#     user_id = db.Column( db.Integer, db.ForeignKey('user.id') )
#
#     user = db.relationship( 'User', backref = db.backref('articles') )
#
# db.create_all()



# class Article(db.Model):
#     __tablename__ = 'article'
#     id = db.Column(db.Integer,primary_key=True,autoincrement=True)
#     title = db.Column(db.String(100),nullable=False)
#     content = db.Column(db.Text,nullable=False)
#
# db.create_all()
# db.create_all()

@app.route('/')
def index():
    g.name = 'bbbbbbbbbbbbbbbbbbbbbbb'
    g_show()
    return render_template('index.html')



resfs = [
    {
        'id':111,
        'txt':"aaaaaaaaaaa"
    },
    {
        'id':222,
        'txt':"bbb"
    },
    {
        'id':3,
        'txt':"CCCCCC"
    }
]
@app.route('/api/v1.0/resf')
def resf():
    return jsonify({'resfs':resfs})


@app.before_request
def fn_hock():
    print("fn_hock")

@app.context_processor
def fn_context_processor():
    return { 'abc':'dskasfjsdfsdjlkfjsdlfjsdfj;lsfj;lsfsa' }

@app.route('/search/')
def search():
    print( request.args )
    print( 'q---',request.args.get('q') )
    return render_template('search.html')

@app.route('/login/',methods=['GET','POST'])
def login():
    if request.method=='GET':
        return render_template('login.html')
    else:
        _name = request.form.get('name')
        _pass = request.form.get('pass')
        print( _name , _pass )
        login_show( _name )
        g.name = 'dsakfjaf;jaf;sadf'
        g_show()
        return 'post'
    # return 'login.html'

# @app.route("/")
# def index():
#
#     article1 = Article( title='aaa', content='AAAAAAAA' )
#     article2 = Article( title='bbbb', content='BB' )
#     tag1 = Tag( name='111' )
#     tag2 = Tag( name='222' )
#
#     article1.tags.append(tag1)
#     article1.tags.append(tag2)
#     article2.tags.append(tag1)
#     article2.tags.append(tag2)
#     db.session.add(article1)
#     db.session.add(article2)
#     db.session.add(tag1)
#     db.session.add(tag2)
#     db.session.commit()
#
#     # user = User( user='张三' )
#     # db.session.add( user )
#     # db.session.commit()
#
#     # article = Article( title='圣诞卡雷锋精神' , content='川大教师木进行', user_id=1 )
#     # db.session.add( article )
#     # db.session.commit()
#
#     # art = Article(title='bbbbb',content='bbbbb')
#     # db.session.add(art)
#     # db.session.commit()
#
#     # art = Article( title="new",content="new content" )
#     # art.user = User.query.filter( User.user == "张三" ).first()
#     #
#     #
#     # #art.user = User.query.filter( User.id == 1 ).first()
#     # db.session.add( art )
#     # db.session.commit()
#
#     return render_template("index.html")

@app.route('/setdata/')
def setdata():
    session['set'] = "safdsaksa"
    session['set2'] = "safd22222222222saksa"
    return "session"

@app.route('/getdata/')
def getdata():
    # print( session.get('set') )
    # print( session['set'] )
    return 'getdata'

@app.route('/popdata/')
def popdata():

    print( 'set---',session.get('set') )
    print( 'set2---',session.get('set2') )

    session.pop('set');
    session.clear()

    print( 'pop---set---',session.get('set') )
    print( 'pop---set2---',session.get('set2') )
    return 'popdata'

@app.route("/query/")
def query():

    art = Article.query.filter( Article.title == 'aaa' ).first()
    tags = art.tags
    for tag in tags:
        print( tag.name )

    # art = Article.query.filter( Article.title == 'new' ).first()
    # print( art.user.user )

    # art = Article.query.filter( Article.title == '圣诞卡雷锋精神' ).first()
    # user_id = art.user_id
    # user = User.query.filter( User.id == user_id ).first()
    #
    # print( user.id, user.user )


    # res = Article.query.filter( Article.title == 'aaaaa' ).first()
    # print( res.title, res.content )

    return "query"
    #return render_template("query.html")

@app.route("/update/")
def update():

    art = Article.query.filter( Article.content == 'aaaaa' ).first()
    art.title = "update title"
    db.session.commit()

    return "update"


@app.route("/delete/")
def delete():

    art = Article.query.filter( Article.content == 'aaaaa' )[0]
    db.session.delete( art )
    db.session.commit()

    return "delete"

# @app.route('/<is_login>/')
# def index(is_login):
#     print(url_for('one'))
#
#     class Person(object):
#         name='李四'
#         like='篮球'
#
#     p = Person()
#
#     user={
#         'username':'王五',
#         'age':3333
#     }
#
#     if is_login == '1':
#         return render_template('index/index2.html', user=user)
#     else:
#         return render_template('index/index2.html')

    # content = {
    #     'user': u'张三',
    #     'gender': u'女',
    #     'age':123,
    #     'person':p,
    #     'websites':{ 'baidu':"www.baidu.com", '126':'www.126.com' }
    #
    # }

    # content={
    #     'user' : '张三',
    #     'gender' : u"男2323",
    #     'age' : 18232
    # }
    # return render_template( 'index.html', **content )
    # return render_template('index.html',user='张三',gender=u"男",age=18)
    # return redirect( url_for('one') )
    # return redirect(url_for('two_test',t='tttttttttttttttttttt'))
    # return 'Hello World! test 1111'

@app.route("/base1/")
def base():
    return render_template('base1.html')


@app.route("/default/")
def default():
    img = u'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3024387196,1621670548&fm=27&gp=0.jpg'
    comments = [
        { 'user':u'张三', 'content':'aaaaaaaaaaaaaaaaa' },
        { 'user':u'李四', 'content':'2222a' },
    ]
    return render_template( 'index/default.html',comments=comments )
    # return render_template('index/default.html',img=img)

@app.route("/fors/")
def fors():
    data = {
        'a':'aaaaaaaaaa',
        'b':1232232
    }

    learns=['aaa','bbbb']

    for k,v in data.items():
        print( k,v )

    return render_template("index/index3.html",data=data , learns=learns)

@app.route("/index4/")
def index4():
    books=[
        {
            'name' : u'西游记',
            'author' : u'罗贯中',
            'price' : 123
        },
        {
            'name' : u'红楼梦',
            'author' : u'曹雪芹',
            'price' : 111
        },
        {
            'name' : u'三国演义',
                'author' : u'罗贯中',
            'price' : 222
        },
    ]

    return render_template('/index/index4.html',books=books)




@app.route("/one")
def one():
    return "one"

@app.route("/two/<t>")
def two_test(t):
    return u"中文内容%s" % t

@app.route("/acticle/<id>")
def acticle(id):
    return u"你要的数据：%s" % id


if __name__ == '__main__':
    app.run(debug=True)
