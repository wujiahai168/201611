#include<iostream>
using namespace std;

int main(){
	int arr[] = {1,2,3,4,5,6,7,8};
	int *start = arr;
	int *end = start +8;
	
	while( start<end ){
		int t = *start;
		*start = *end;
		*end = t;
		
		start++;
		end--;
		
		
	}
	
	for( int i=0; i<8; i++ )
		cout<<arr[i]<<"---";
	
	
//	int *start = arr;
//	int *end = start+8;
//	
//	cout<<*start<<"---"<<end<<endl;
//
//	cout<<*(start+1)<<"---"<<*(start+2)<<"---"<<*(start+3)<<"---"<<*(start+4)<<"---"<<endl;
//	cout<<start+1<<"---"<<start+2<<"---"<<start+3<<"---"<<start+7<<"---"<<start+8<<"---"<<endl;
	
}
