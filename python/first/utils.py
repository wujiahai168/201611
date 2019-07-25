
from flask import g

def login_show( _name ):
    print( 'login_show',_name )


def g_show():
    print('g',g.name)