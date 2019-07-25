#include<iostream>
using namespace std;
int main(){
	int i;
	for( i=0; i<10; i++ ){
		if( i==4 ) goto FLAG;
		cout<<i<<endl;
	}
	FLAG:
	cout<<"---end--"<<i;
	
	//	int i = 5;
	//	cout<<++i<<endl;
	//	cout<<i++<<endl;
	
	//	char a[] = "abc";
	//	char *p1 = a;
	//	double *p2 = reinterpret_cast<double*>(p1);
	//	
	//	cout<<a[0]<<a[1]<<endl;
	//	cout<<p1<<endl;
	//	cout<<p2<<endl;
	//	cout<<*p2<<endl;
	
	//	char c = 'a';
	//	float c = 88.12;
	//	int i = (int)c;
	//	int j = static_cast<int>(c);
	//	int k = dynamic_cast<int>(c);
	//	cout<<c<<endl;
	//	cout<<i<<endl;
	//	cout<<j<<endl;
	//	cout<<k<<endl;
	
}
