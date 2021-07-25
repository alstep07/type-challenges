type Pop<T extends any[]> = T extends [...infer P, infer K] ? P : never;
