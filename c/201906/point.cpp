#include<iostream>
using namespace std;

int main(){

	int arr[] = {1,2,34};
	int (*p)[3] = &arr;
	
	for( int i=0; i<3; i++ )
		cout<<(*p)[i]<<"---";

//	int a = 1;
//	int *p1=&a, *p2;
//	p2 = p1;
//
//	cout<<"*p1---"<<*p1<<endl;
//	cout<<"p2---"<<p2<<endl;
//	
//	cout<<"&p2---"<<&p2<<endl;
}
