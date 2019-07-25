#include<iostream>
using namespace std;

int main(){
	int *p = new int;
	int i;
	cout<<"p=---";;
	cin>>*p;
	
	int *q = new int[*p];
	
	cout<<"\n"<<"--array-----"<<endl;
	for(i=0; i<*p; i++){
		cin>>q[i];
	}
	
	for(i=0; i<*p; i++){
		cout<<q[i]<<"+++++";
	}
	
	delete p;
	delete []q;
	
	
	for(i=0; i<*p; i++){
		cout<<q[i]<<"+++++";
	}
}
