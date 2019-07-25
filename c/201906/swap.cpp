#include<iostream>
using namespace std;

void swap( int *, int * );

int main(){
	
	int array[] = { 11,22,33,44,55 };
	int *p;
	p=array;

	
	for( int i=0; i<5; i++ ){
		cout<<array[i]<<"---"; 
	}
	
	for( int i=0; i<5; i++ ){
		cout<<*(array+i)<<"+++";
	}
		
	for( int i=0; i<5; i++ ){
		cout<<*(p+i)<<">>>";
	}
	
	
	
//	int i= 99;
//	int *p = &i;
//	int **pp = &p;
//	
//	cout<<"p--"<<p<<endl;
//	cout<<"*p---"<<*p<<endl;
//	
//	cout<<"pp---"<<pp<<endl;
//	cout<<"*pp---"<<*pp<<endl;
//	cout<<"**pp---"<<**pp<<endl;
	
	
//	void (*p)( int *, int * );
//	p = swap;
//	
//	int a=22, b=33;
//	(*p)(&a,&b);
//	cout<<a<<"---"<<b<<endl;
}

void swap( int *a, int *b ){
	int t = *a;
	*a = *b;
	*b = t;
}
