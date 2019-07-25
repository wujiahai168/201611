#include<iostream>
int main(){
using namespace std;
	int a=11,b=22;
	int *p = &a;
	int &q = a;
	cout<<"1---"<<a<<"\t"<<*p<<"\t"<<q<<endl;
	
	p=&b;
	q=b;
	cout<<"2---"<<a<<"\t"<<*p<<"\t"<<q<<endl;
	
	
}
