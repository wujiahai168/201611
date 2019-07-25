#include<iostream>
using namespace std;

class Number{
	private:
		int num;
	public:
		int add( int a, int b=2222 ){
			return a+b;	
		}; 
		void add2( int a ){
			cout<<"add2----"<<( a*num );
		};
		Number( int nnn ){
			num = nnn;
		}
		
};

int main(){
	Number n( 1000 );
	int res = n.add( 12 );
	cout<<"res---"<<res<<endl;
	
	n.add2( 3333 );
	
	n.Number( 66666 );
	n.add2(1);
	
	
}
