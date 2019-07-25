#include<iostream>
using namespace std;

class Animal
{
	public:
		void breathe()
		{
			cout<<"Animal breathe";
		}
};

class Fish:public Animal
{
	public:
		void breathe()
		{
			cout<<"Fish breathe";	
		}
};

int main(){
	Fish fh;
	Animal *an = &fh;
	an->breathe();
}












