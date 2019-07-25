#include<iostream>
using namespace std;

class Dot{
	private:
		double a,b;
	public:
		Dot();
		Dot( double x, double y );
		void show();
};

Dot::Dot(){
	a = 111;
	b = 222;
}
Dot::Dot( double x, double y ){
	a=x;
	b=y;
}
void Dot::show(){
	cout<<a<<"---"<<b<<endl;
}

int main(){
	Dot d;
	d.show();	
	
	Dot dd(123,999);
	dd.show();
}






