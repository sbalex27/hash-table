
/**
 * @author Sergio Alexander Batres Escboedo - Analista Desarrollador - @github sbalex27
 */
export class HashTable {
    vector: string[] | undefined[] = [];

    constructor(length: number) {
        this.vector = new Array(length);
    }

    toBinary(input: string) {
        let binary = "";
        for (let i = 0; i < input.length; i++) {
            binary += input.charCodeAt(i).toString(2);
        }
        return binary;
    }

    algorithm(input: string) {
        const binary = this.toBinary(input);
        const mod = Number(binary) % 31;
        return mod;
    }

    conflictAlgorithm(input: string) {
        const binary = this.toBinary(input);
        const mod = Number(binary) % 37;
        return mod;
    }

    insert(input: string) {
        const index = this.algorithm(input);
        if (this.vector[index] === undefined) {
            this.vector[index] = input;
        } else {
            const conflictIndex = this.conflictAlgorithm(input);
            if (this.vector[conflictIndex] === undefined) {
                this.vector[conflictIndex] = input;
            } else {
                console.log("No se pudo insertar el elemento");
            }
        }
    }

    find(input: string) {
        const index = this.algorithm(input);
        if (this.vector[index] === input) {
            return this.vector[index];
        } else {
            const conflictIndex = this.conflictAlgorithm(input);
            if (this.vector[conflictIndex] === input) {
                return this.vector[conflictIndex];
            } else {
                return -1;
            }
        }
    }

    delete(input: string) {
        const index = this.algorithm(input);
        if (this.vector[index] === input) {
            this.vector[index] = undefined;
        } else {
            const conflictIndex = this.conflictAlgorithm(input);
            if (this.vector[conflictIndex] === input) {
                this.vector[conflictIndex] = undefined;
            } else {
                console.log("No se pudo eliminar el elemento");
            }
        }
    }
}
