export enum UnitOfMeasurement {
    piece = 'PIECE',
    kilo = 'KILO',
    litre = 'LITRE',
    meter = 'METER'
}
//'шт', 'кг', 'л', 'м'
export const UNITS_OF_MEASUREMENT: Record<UnitOfMeasurement, string> = {
    [UnitOfMeasurement.piece]: 'шт',
    [UnitOfMeasurement.kilo]: 'кг',
    [UnitOfMeasurement.litre]: 'л',
    [UnitOfMeasurement.meter]: 'м'
}