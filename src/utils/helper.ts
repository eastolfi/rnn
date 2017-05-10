class Helper {
    	/**
     * Returns a random number between min (inclusive) and
     * max (exclusive)
     */
	static getRandomExclusive(min: number, max: number) {
		return Math.random() * (max - min) + min;
	}
	
	/**
     * Returns a random number between -1 and 1 exclusive
     */
    static getRandom() {
        return Helper.getRandomExclusive(-1, 1);
        // getRandomInclusive?
    }

    /**
     * Returns a random integer between min (inclusive) and max (inclusive)
     */
    static getRandomInclusive(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
     * This is the sigmoid function used by the neurons
     * to run their output through
     * @param  Integer x The input
     * @return Integer
     */
    static sigmoid(input: number) {
        return ( 1 / (1 + Math.pow(Math.E, (-input))));
        // return ( 1 / ( 1 + Math.exp(-input / 1)));
    //    return 1/(1+Math.pow(Math.E, -input));
    }
}

export { Helper }