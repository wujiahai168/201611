#include<iostream>
#include<cstring>
using namespace std;

int main(){
	
	char buffer[128];
	cout<<"input buffer:"<<endl;
	
	cin>>buffer;
	
	int len = (int)strlen(buffer);
	cout<<"len"<<len<<endl;
	int b=0;
	char t;
	while( b<len/2 ){
		t = buffer[b];
		buffer[b] = buffer[len-b];
		buffer[len-b] = t;
		cout<<t<<endl; 
		b++;
	} 
	
	cout<<"---buffer----"<<endl<<buffer<<endl;
	
	for( int i=0; i<len; i++ ){
		cout<<buffer[i];
	}
	
	
//	int a[5]={0};
//	int i, j, t;
//	
//	cout<<"input a:"<<endl;
//	
//	for( i=0; i<5; i++ ){
//		cin>>a[i];
//	}
//	
//	for( i=0; i<5; i++ ){
//		cout<<"--"<<i<<"--"<<a[i]<<endl;
//	}
//	
//	for( i=0; i<5; i++ ){
//		for( j=0; j<5-i-1; j++ ){
//			if( a[j]>a[j+1] ){
//				t = a[j];
//				a[j] = a[j+1];
//				a[j+1] = t;
//			}
//		}
//	}
//	
//	for( i=0; i<5; i++ ){
//		cout<<"++"<<i<<"--"<<a[i]<<endl;
//	}
	
	
}
