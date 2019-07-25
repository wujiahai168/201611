#include<iostream>
using namespace std;


class Base1{
	int x1;
	public:
		Base1(int y1){
			x1 = y1;
			cout<<"Base1---"<<x1<<endl;
		};
		~Base1(){
			cout<<"over Base1\n";
		}
};

class Base2{
	int x2;
	public:
		Base2(int y2){
			x2 = y2;
			cout<<"Base1---"<<x2<<endl;
		}
		~Base2(){
			cout<<"over Base2\n";
		}
};

class Test:public Base1,public Base2
{
	private:
		Base1 b1;
		Base2 b2;
	public:
		Test( int a,int b, int c, int d ):Base1(a),Base2(b),b1(c),b2(d)
		{
			cout<<"Test----"<<endl;
		}
} ;

int main(){
	Test t(1,2,3,4);
	return 0;
}







