#include<iostream>
using namespace std;

template<class T>
class Test
{
	private:
		int x,y;
	public:
		Test(int a,int b)
		{
			x = a;
			y = b;
		}
		T max()
		{
			return (x>y) ? x : y;
		}
		T min();
};

T Test::min()
{
	return (x>y) ? y : x;	
}


int main()
{
	Test<int> obj(12,323);
	cout<<obj.max();
}









