int minManipulation (int N, string S1, string S2) {
    vector<int> count(26, 0);
    for (int i = 0; i < N; i++) count[S1[i] - 'a']++;
    for (int i = 0; i < N; i++) count[S2[i] - 'a']--;
    int result = 0;
    for (int i = 0; i < 26; i++) result += abs(count[i]);
    return result / 2;
}