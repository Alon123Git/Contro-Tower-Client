abstract class Config {

    public supportEmail = "alonadar94@gmail.com";

    public urls = { planes: "",planeImage: ""};

    public constructor(baseUrl: string) {
        this.urls = {
            planes: baseUrl + "flight/",
            planeImage: baseUrl + "flight/images/",
        };
    }
}

class DevelopmentConfig extends Config {
    public constructor() {
        super("https://localhost:7266/");
    }
}

class ProductionConfig extends Config {
    public constructor() {
        super("https://localhost:7266/");
    }
}

const config = process.env.NODE_ENV === "development" ? new DevelopmentConfig() : new ProductionConfig();

// const config = process.env.NODE_ENV;
// if (config == "development"){
//     new DevelopmentConfig();
// }
// else {
//     new ProductionConfig();
// }

export default config;