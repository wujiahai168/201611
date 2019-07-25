#include<iostream>
using namespace std;



class Base1{
	int i = 111;
	public:
		show(){
			cout<<"Base11111----"<<i<<endl;
		}
};

class Base2{
	int i = 222222222;
	public:
		show();
};

Base2::show(){
	cout<<"Base222----"<<i<<endl;
}

class Test:public Base1,public Base2{
	int i = 33333;
};

int main(){
	Test t;
	t.Base1::show();
} 







