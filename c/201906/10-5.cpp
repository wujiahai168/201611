#include<iostream>
using namespace std;

class Base{
	public:
		int x;
		void show(){
			cout<<"This is Base x = "<<x<<endl;
		}
};

class Derived:public Base{
	public:
		int x;
		void show(){
			cout<<"This is Derived x="<<x<<endl;
		}
};

int main(){
	Derived ob;
	ob.x = 5;
	ob.show();
	
	ob.Base::x = 12;
	ob.Base::show();
}
