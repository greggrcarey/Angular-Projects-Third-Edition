export interface Weather {
    weather: WeatherInfo[],
    main: {
        temp: number;
        pressue: number;
        humidity: number;
    };
    wind: {
        speed: number;
    };
    sys: {
        country: string;
    };
    name: string;

}
interface WeatherInfo {
    main: string;
    icon: string;
}
