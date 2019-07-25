#include<iostream>;
using namespace std;

void swap(int *x, int *y){
	int t;
	t=*x;
	*x=*y;
	*y=t;
}

int main(){
	void (*p)(int *, int *);
	p = swap;
	int a=55, b=89;
	(*p)(&a,&b);
	cout<<a<<"----"<<b<<endl;
}
