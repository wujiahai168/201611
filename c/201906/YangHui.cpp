#include<iostream>
using namespace std;
int main(){
	int n, i, j;
	
	cout<<"input n :";
	cin>>n;
	
	int a[20]={0}, b[20]={0};
	
	for( int i=0; i<n; i++ ){
		b[0] = 1;
		b[i] = 1;
		
		for( j=1; j<i; j++ ){
			b[j] = a[j] + a[j-1];
		}
		
		for( j=0; j<n-i-1; j++ ){
			cout<<' ';
		}
		
		for( j=0; j<i; j++ ){
			if( j>0 ){
				cout<<' ';
			}
			cout<<b[j];
		}
				
		cout<<endl;
		
		for( j=0; j<=i; j++ ){ 
			a[j] = b[j];
		} 
		
	}
	
}
