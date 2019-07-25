#include<iostream>
using namespace std;

class Test{
	private:
		int a,b;
	public:
		Test(){
			a = 111;
			b = 222;	
		};
		Test(int x);
		void add(){
			cout<<"a+b="<<a+b<<endl;
		}
};

Test::Test( int xxx ){
	a = xxx;
	b = 1000;
}

int main(){
	Test t;
	t.add();
	
	Test t2( 12345 );
	t2.add();
}
