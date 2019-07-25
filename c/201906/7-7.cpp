#include<iostream>
using namespace std;

int main(){
	int arr[] = { 1,2,3 };
	int (*p)[3];
	
	p = &arr;
	
	for(int i=0; i<3; i++){
		cout<<(*p)[i]<<",";
		
	}
}
