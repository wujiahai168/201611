#include<iostream>
using namespace std;

int main(){
	int i=9;
	int *p = &i;
	int **pp = &p;
	
	cout<<"*p---"<<*p<<endl;
	cout<<"**pp---"<<**pp<<endl;
	
	cout<<"p---"<<p<<endl;
	cout<<"*pp---"<<*pp<<endl;
}
