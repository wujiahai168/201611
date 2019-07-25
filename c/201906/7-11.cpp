#include<iostream>
using namespace std;
int main(){
	int arr[] = {1,2,3,4,5};
	int *p=arr;
	
	for(int i=0;i<5;i++){
		cout<<arr[i]<<"---";
	}
	for(int i=0;i<5;i++){
		cout<<*(arr+i)<<"---";
	}
	for(int i=0;i<5;i++){
		cout<<*(p+i)<<"---";
	}
}
