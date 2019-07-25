

# from wrapper import wrapper

def my( func ):

    def wrapper(*args,**kwars):
        print('wrapper')
        func(*args,**kwars)

    return wrapper

@my
def run():
    print('rrrrrrrrrrrrrrrrrrrr')


run()

@my
def plus( x,y ):
    z = x + y
    print('z---',z)

plus(33,55)