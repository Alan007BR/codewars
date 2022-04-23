#include <stddef.h>

size_t countBits(unsigned value)
{
    int ones = 0, i = 0;
    int num;

    while (value) {
        num = value % 2;
        if(num == 1) ones++;
        i++;
        value /= 2;
    }

	return ones;
}

int main() {
    int resul = 0;

    resul = countBits(1234);
    printf("resul = %d\n", resul);

}