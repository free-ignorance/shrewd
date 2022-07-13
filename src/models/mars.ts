const PLANETARY_ORBIT = 686.93;
// Orbital elements of Mars:
// N = longitude of the ascending node
//     N =  49.5574 + 2.11081E-5 * d
// i = inclination to the ecliptic (plane of the Earth's orbit)
//     i = 1.8497 - 1.78E-8 * d
// w = argument of perihelion
//     w = 286.5016 + 2.92961E-5 * d
// a = semi-major axis, or mean distance from Sun
//     a = 1.523688  (AU)
// e = eccentricity (0=circle, 0-1=ellipse, 1=parabola)
//     e = 0.093405 + 2.516E-9 * d
// M = mean anomaly (0 at perihelion; increases uniformly with time)
//     M =  18.6021 + 0.5240207766 * d
//     d = 367*y - 7 * ( y + (m+9)/12 ) / 4 - 3 * ( ( y + (m-9)/7 ) / 100 + 1 ) / 4 + 275*m/9 + D - 730515
// Mars        9.36" equ     9.28" pol
// The primary orbital elements are here denoted as:

//     w = argument of perihelion
//     a = semi-major axis, or mean distance from Sun
//     e = eccentricity (0=circle, 0-1=ellipse, 1=parabola)
//     M = mean anomaly (0 at perihelion; increases uniformly with time)

// Related orbital elements are:

//     w1 = N + w   = longitude of perihelion
//     L  = M + w1  = mean longitude
//     q  = a*(1-e) = perihelion distance
//     Q  = a*(1+e) = aphelion distance
//     P  = a ^ 1.5 = orbital period (years if a is in AU, astronomical units)
//     T  = Epoch_of_M - (M(deg)/360_deg) / P  = time of perihelion
//     v  = true anomaly (angle between position and perihelion)
//     E  = eccentric anomaly
