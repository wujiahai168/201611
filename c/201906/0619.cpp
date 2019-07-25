#include<iostream>
using namespace std;

int main(){
	int arr[] = {1,2,3,4,5};
	int *p1 = arr;
	int *p2 = p1+4;
	
	while( p1<p2 ){
		int t = *p1;
		*p1 = *p2;
		*p2 = t;
		p1++;
		p2--;
	}
	
	for( int i=0; i<5; i++ ){
		cout<<arr[i]<<"---";
	}
	//cout<<*p2;
}
