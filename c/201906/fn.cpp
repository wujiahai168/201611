#include<iostream>
#include<math.h>
using namespace std;

int power( int n ){
	if( n!=0 ) 
		return n*power( n-1 );
	else 
		return 1;
}

double all( int x , int n ){
	return x/power( 2*n-1 );
}

int main( int t, char *argv[] ){
	
	int x, n;
	double sum=0; 
	cout<<"x,n"<<endl;
	cin>>x>>n;
	
	for( int i=0; i<n; i++ ){
		sum += all( x,i );
	}
	
	cout<<"sum---"<<sum;
	
	//cout<<pow(3,3)<<endl;
	//cout<<"t--"<<t<<endl; 
}
