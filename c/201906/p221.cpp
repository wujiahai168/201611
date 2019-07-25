#include<iostream>
using namespace std;

class One{
	
	private:
		int a;
		
		int getOnePrivate( ){
			return a;
		}
		
	public:
		void initOne( int n ){
			a = n;
		}
		int getOne( ){
			return a;
		}
	
};

class Two: public One{
	
	private:
		int b;
	public:
		void intTwo( int x,int y ){
			initOne( x );
			b = y;	
		}
		
		int getTwo(){
			return b*getOne();
		}
	
};

int main(){
	
	Two t;
	t.intTwo( 2,4 );
	cout<<t.getTwo()<<endl;
	
	cout<<t.getOnePrivate()<<endl;
	
}
