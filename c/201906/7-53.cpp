#include<iostream>
using namespace std;

int main(){
	
	void change(int &, int &);
	
	int a=33, b= 4544;
	
	change(a,b);
	
	cout<<b<<"------"<<a;
	
}

void change(int &x, int &y){
	int t=x;
	x = y;
	y = t;
	
}
