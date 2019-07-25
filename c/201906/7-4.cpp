#include<iostream>
using namespace std;
int main(){
	int a=99;
	int *p=&a;
	
	cout<<"*p---"<<*p<<endl;
	cout<<"p---"<<p<<endl;
	cout<<"&p"<<&p<<endl;
}
