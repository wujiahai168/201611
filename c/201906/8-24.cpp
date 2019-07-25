#include<iostream>
enum ex{ one,two=22,three }e1,e2;
using namespace std;

int main(){
	cout<<"one---"<<e1::one<<endl;
	cout<<"two---"<<e2.two<<endl;
	cout<<"333333---"<<e2.three<<endl;
} 
