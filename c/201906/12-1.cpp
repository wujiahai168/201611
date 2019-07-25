#include<iostream>
using namespace std;

class Add
{
	public:
		int operand;
		Add()
		{
			operand = 0;
		}
		Add(int value)
		{
			operand = value;
		}
		Add operator+(Add x,int y);
}

Add::operator+( Add a, int b )
{
	Add sum;
	sum.operand = a.operand + b;
	return sum; 
}

int main()
{
	Add a(5),b;
	b = a+8;
	
	cout<<b.operand<<endl;
	
	
	
	
	
	
	
	
}
