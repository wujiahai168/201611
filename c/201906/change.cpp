#include<iostream>

void change( int *p1, int *p2 ){
	int t= *p1;
	*p1= *p2;
	*p2 = t;
}

int main(){
	int a=111, b=222;
	change( &a, &b );
	std::cout<<a<<"\t"<<b<<"\n";
}
