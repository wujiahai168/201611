#include<iostream>
using namespace std;

template<typename T>
class Complex
{
	private:
		T a, b; 
	public:
		Complex(T a,T b)
		{
			this->a = a;
			this->b = b;
		}
		Complex<T> operator+(Complex &c)
		{
			Complex<T> tmp( this->a+c.a, this->b+c.b );
			return tmp;
		}
		Show()
		{
			cout<<this.a<<"---"<<this.b<<endl;
		}
		
};

int main()
{
	Complex<int> a(10,20);
	Complex<int> b(20,30);
	Complex<int> c = a+b;
	c.show();
	return 0;
}








