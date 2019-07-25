#include<iostream>
using namespace std;

int main(){
	
	int arr[3][3] =  { 1,2,3,4,5,6,7,8,9 };
	

	for( int i=0; i<3; i++ ){
		for( int j=0; j<3; j++ ){
			cout<<arr[i][j]<<"---";
		}
	}
	cout<<endl;
	
	for( int i=0; i<3; i++ ){
		for( int j=0; j<3; j++ ){
			cout<<*(*(arr+i)+j)<<"---";
		}
	}
	cout<<endl;

	for( int i=0; i<3; i++ ){
		for( int j=0; j<3; j++ ){
			cout<<*(arr[i]+j)<<"---";
		}
	}
	cout<<endl;
	
	
//	int arr[]={1,2,3,4,5};
//	int *p1=arr;
//	int *p2=p1+4; 
//	
//	cout<<"before---";
//	for( int i=0; i<5; i++ )
//		cout<<arr[i]<<"--";
//		
//	while( p1<p2 ){
//		int t = *p1;
//		*p1 = *p2;
//		*p2 = t;
//		p1++;
//		p2--;
//	}
//	
//	
//	cout<<endl<<"after---";
//	for( int i=0; i<5; i++ )
//		cout<<arr[i]<<"--";
//		
//	
		
}
