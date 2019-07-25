#include<iostream>
using namespace std;
int const i=99;

inline int box(int x, int y, int z){
	int v=0;
	for(int i=0; i<99; i++){
		v += x+y+z +i;
	}
	return v;
}


int square( int x ){
	return x*x;
}

double square( double x ){
	return x*x;
}

int avg = 88.8;

void swap(int &m, int &n){
	int t = m;
	m = n;
	n = t;
}

int main(){
	
	int a=11, b=22;
	swap(a,b);
	cout<<a<<"---"<<b<<endl;
	
	
//	int i=11;
//	int &j = i;
//	i=2222;
//	cout<<i<<"----"<<j;
	
	
	
	
//	int *pi = new int;
//	*pi = 12;
//	
//	cout<<*pi<<endl;
	
	
	
//	int i=10;
//	double d = (double)i;
//	double e = double(i);
//	cout<<d<<"----"<<sizeof(e)<<"----"<<sizeof(i)<<endl;
	
	
	//int avg = 44;
	
	//×÷ÓÃÓòÔËËã·û 
	//cout<<::avg<<endl;
	
	
	
	
	//cout<<square( 22.3 )<<endl; 
	
//	int a=11, b=22, c=33;
//	cout<<box(a,b,c)<<endl;
}
