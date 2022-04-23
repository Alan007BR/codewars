//solution must allocate all required memory
//and return a free-able buffer to the caller.

char *disemvowel(const char *str)
{   
    int pos = 0;
    char *str2 = (char *)calloc(strlen(str) + 1, sizeof(char));

    for(int i=0; str[i] != '\0'; i++) {
        if(str[i] != 'a' && str[i] != 'e' && str[i] != 'i' && str[i] != 'o' && str[i] != 'u' && str[i] != 'A' && str[i] != 'E' && str[i] != 'I' && str[i] != 'O' && str[i] != 'U') {
            str2[pos++] = str[i];
        }
    }
  return str2;
}

int main() {

    char resul[50];

    disemvowel("This website is for losers LOL!");
    return 0;
}