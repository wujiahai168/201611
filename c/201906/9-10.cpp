#include<iostream>
using namespace std;

class Person{

	int num;
	
	public:
	void hi(){
		cout<<"hi----"<<num<<endl;
	};
	void hello(); 
	
	Person();
	
};

Person::Person(){
	num = 999;
	cout<<"---1----"<<endl;
}

void Person::hello(){
	cout<<"hello----"<<endl;
};


int main(){
	Person p;
	p.hi();
	p.hello();
}

