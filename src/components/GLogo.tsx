import React from 'react';
import { Image, StyleSheet, View, Text, ViewStyle, ColorValue, StyleProp, ImageSourcePropType } from 'react-native';
import Svg, { SvgProps, Path, Defs, ClipPath, Use } from "react-native-svg"
import { ms } from 'react-native-size-matters';

import { RobotoCondensed, blue, gold, base, logo } from '../config';

type GSHProps = {
  size: number;
  style?: StyleProp<ViewStyle>;
}

type Props = {
  size: number;
  style?: StyleProp<ViewStyle>;
  company: string;
}

function GLogo({ size, style }: GSHProps) {
  const scale = size / 120;
  return (
    <Svg
      style = { style }
      height={ size }
      width={ size }>
      <Path
        transform={`scale(${scale}, ${scale})`}
        stroke="none"
        fill={gold.logo}
        d="m 59.359017,116.37435 c -1.298546,-3.31692 -0.762776,-42.815685 0.614134,-45.276088 1.565216,-2.79689 2.834893,39.468758 1.336796,44.499988 -0.539326,1.81128 -1.41006,2.15767 -1.95093,0.7761 z m -9.887473,0.17185 c -0.496044,-0.49604 -0.56409,-5.6368 -0.10212,-7.71516 0.17086,-0.76869 0.490726,-2.37261 0.710813,-3.56428 0.461233,-2.49736 2.903377,-12.425586 3.33696,-13.566006 0.99393,-2.61422 2.579674,-0.50492 2.24693,2.98879 -1.59976,16.797106 -3.730767,24.318476 -6.192583,21.856656 z m 19.440934,-0.36823 c -1.64135,-2.50501 -3.681617,-13.8964 -3.924437,-21.911206 l -0.09594,-3.16667 1.033253,-0.10072 1.033254,-0.10072 1.374813,5.26739 c 2.58975,9.922216 3.726017,17.973806 2.85635,20.240126 -0.301553,0.78583 -1.705023,0.6452 -2.277296,-0.2282 z m -28.749958,-2.7883 c -0.612213,-1.5954 2.955294,-12.726 7.891974,-24.622906 10.813403,-26.059246 11.464977,-25.283292 2.379163,2.83333 C 45.029764,108.32278 41.2749,116.28849 40.16252,113.38967 Z m 38.092478,-0.87573 C 75.045211,107.03686 66.046711,81.068744 63.586574,70.183429 c -0.302103,-1.33671 0.409857,-1.147284 1.00044,0.26618 0.271823,0.650566 0.919783,2.113066 1.43991,3.25 5.893077,12.881525 13.133401,31.907291 14.059614,36.945171 0.645767,3.51245 -0.301793,4.47948 -1.83154,1.86916 z m -47.129561,-2.64718 c -1.363576,-1.36357 1.684845,-7.71682 8.52482,-17.766666 3.617347,-5.3149 4.345663,-5.94732 5.39418,-4.68394 0.685823,0.82637 -4.748754,11.98954 -9.196147,18.889816 -2.1045,3.2652 -3.765861,4.51779 -4.722853,3.56079 z m 55.581284,-0.91278 C 82.691355,104.73295 74.298484,87.757744 75.919368,87.135754 c 1.09282,-0.41935 1.453853,-0.12381 3.519427,2.88101 5.584553,8.12393 9.64254,15.185126 10.22321,17.789156 0.602766,2.70313 -0.915067,3.29277 -2.955284,1.14806 z M 23.058957,103.3501 c 5.33e-4,-1.64487 6.163565,-9.761946 13.983196,-18.416676 6.947431,-7.689379 15.450341,-16.692749 16.410681,-17.376572 l 1.016423,-0.723757 -0.4225,0.789444 c -1.36864,2.557333 -13.55221,18.619835 -19.95707,26.310885 -6.514142,7.822286 -11.031456,11.678606 -11.03073,9.416676 z m 69.456138,-2.63627 C 89.571695,97.727054 84.245555,91.496254 80.593011,86.766764 74.935544,79.441194 67.379861,69.246865 66.882408,68.268059 l -0.592271,-1.16537 1.134317,0.86501 c 3.080417,2.34907 21.997367,23.406485 26.514828,29.514995 5.29316,7.157426 4.412983,9.154336 -1.424187,3.231136 z M 15.947658,97.377874 c -1.653064,-1.65307 3.595033,-6.90004 15.076688,-15.07346 4.028657,-2.86787 4.353224,-3.00457 5.177281,-2.18051 0.768593,0.76859 0.726443,0.85153 -1.72619,3.39651 -8.380744,8.6963 -17.13865,15.24659 -18.527779,13.85746 z m 85.444452,-0.66837 c -3.805988,-2.24371 -17.333339,-14.52357 -17.333339,-15.73485 0,-0.66292 0.61916,-1.37456 1.19593,-1.37456 1.28225,0 15.615699,11.07307 17.863749,13.80035 2.8937,3.51055 1.88739,5.43944 -1.72634,3.30906 z M 10.572415,88.622174 C 9.5254568,86.928164 22.503132,78.943722 42.40114,69.039735 54.219594,63.157245 54.781461,63.268332 45.225437,69.598119 24.994484,82.998834 11.6311,90.335164 10.572415,88.622174 Z m 95.486355,-0.63311 C 97.887912,84.495714 63.057507,62.472918 69.642104,64.963288 c 6.966477,2.634804 33.876006,17.374776 38.394986,21.031246 3.4379,2.78174 2.37334,3.85502 -1.97832,1.99453 z m -99.7500012,-7.749 c -2.815767,-1.640035 3.280767,-4.827845 16.4902042,-8.622542 7.041605,-2.022857 9.328451,-2.016217 8.067887,0.02343 -1.42294,2.30235 -22.6235922,9.725852 -24.5580912,8.599102 z m 103.0833412,-0.29 C 98.106828,76.773259 86.396581,70.502832 90.801295,69.995342 c 1.68212,-0.193807 16.390035,4.326347 20.069825,6.168017 5.9499,2.977815 4.92937,5.590665 -1.47901,3.786705 z M 4.1421028,70.403205 C 0.81928884,68.872072 11.176249,66.191475 30.392103,63.609165 42.93032,61.924222 46.710174,61.520392 48.725437,61.650468 l 1.833333,0.118334 -1.833333,0.59296 c -2.546233,0.823533 -21.017741,5.066947 -25.666667,5.89634 -1.191667,0.2126 -2.766667,0.524753 -3.5,0.69367 -4.195961,0.966523 -14.3868582,1.925963 -15.4166672,1.451433 z M 105.89211,69.779419 c -6.785738,-1.053597 -12.831805,-2.283277 -24.666672,-5.016841 -11.805094,-2.726683 -14.175757,-4.205533 -4.56421,-2.84721 1.226983,0.173397 3.730877,0.485184 5.56421,0.692857 19.916032,2.256 34.333332,5.263907 34.333332,7.163027 0,0.98673 -4.34279,0.990053 -10.66666,0.0082 z m 0.16666,-7.754521 C 95.793528,61.716142 91.725438,61.130795 91.725438,59.962515 c 0,-1.090073 0.800204,-1.339313 5.357077,-1.668577 14.164135,-1.023443 20.406555,-0.65927 21.132625,1.232847 0.68882,1.79504 -3.93571,2.745377 -12.15637,2.498113 z M 4.8921028,61.623858 c -2.483585,-0.599363 -3.245431,-1.853303 -1.729483,-2.84659 3.046668,-1.996253 25.8961502,-0.976116 25.8961502,1.15616 0,1.545067 -19.2030552,2.888297 -24.1666672,1.69043 z M 44.05877,57.926588 c -1.008333,-0.142823 -3.333333,-0.43602 -5.166667,-0.65155 -3.00977,-0.35383 -7.838751,-0.99988 -15.333333,-2.051376 C 8.6999348,53.138951 -1.4656962,49.649795 6.3956378,49.332745 c 3.376759,-0.136184 13.7965312,1.352953 20.4964652,2.929243 0.733333,0.17253 3.508334,0.785953 6.166667,1.363157 16.422494,3.565823 22.451747,5.923507 11,4.301443 z m 26.530761,0.0094 c 0.28866,-0.28866 4.437733,-1.389726 11.802574,-3.13213 19.963765,-4.723107 33.910445,-6.678557 34.267625,-4.804633 0.21985,1.15343 -3.94211,2.450316 -13.60096,4.238123 -4.451655,0.82398 -14.750315,2.28676 -21.499999,3.05377 -1.833333,0.208334 -4.148383,0.513077 -5.144553,0.67721 -2.50119,0.4121 -6.248324,0.391297 -5.824687,-0.03233 z M 50.725437,54.788238 C 45.73239,52.941315 21.981727,40.208724 15.225436,35.756894 7.9256938,30.94698 9.4031678,29.232109 17.385418,33.249853 c 7.72187,3.886685 32.220369,19.192218 34.172719,21.349542 0.692473,0.765173 0.71287,0.760547 -0.8327,0.188843 z m 18.000001,0.131207 c 0,-1.124934 29.20879,-19.304761 36.417572,-22.666636 7.675,-3.579306 5.75395,0.380234 -2.58424,5.326442 -12.497669,7.41361 -33.833332,18.348524 -33.833332,17.340194 z M 51.892104,50.671508 C 44.336594,43.438791 28.1996,25.045935 24.631566,19.600094 c -3.885806,-5.93085 -0.776032,-5.020743 5.303776,1.552205 4.760351,5.146469 7.067431,7.994238 15.649268,19.316855 9.370711,12.363434 10.538901,14.252981 6.307494,10.202354 z m 14.5,1.76504 c 0,-0.520667 9.308717,-13.213107 14.303714,-19.50312 7.430213,-9.35659 14.154237,-16.693329 15.66013,-17.087129 1.991177,-0.520704 0.949727,2.012764 -2.968233,7.22064 -6.251214,8.309307 -26.995611,30.877969 -26.995611,29.369609 z M 55.793467,48.850095 C 48.40553,33.483778 39.28938,8.7525552 40.168593,6.4613582 c 1.41143,-3.67813 8.333657,13.4777608 15.388588,38.1387368 1.84251,6.440613 1.914816,7.741216 0.236286,4.25 z m 7.930914,1 c -0.0027,-1.82667 6.543867,-22.791606 10.64274,-34.083335 1.163543,-3.205367 4.336527,-9.5125608 4.892934,-9.7260748 3.016266,-1.15745 -0.905951,11.4546378 -10.645914,34.2324588 -4.466907,10.446294 -4.887377,11.269811 -4.88976,9.576951 z M 27.725436,49.604425 C 27.267103,49.452418 25.392103,48.917961 23.55877,48.416741 11.990959,45.254188 4.7811028,41.810688 5.9458578,40.004638 c 1.190355,-1.84575 11.8959472,1.44836 23.1726552,7.130223 3.10524,1.5646 1.966278,3.583684 -1.393077,2.469564 z m 62.202332,-0.19826 c -0.455857,-1.187947 -0.126487,-1.538974 2.665834,-2.84111 14.432708,-6.730384 22.131838,-8.867117 22.131838,-6.142241 0,2.660577 -23.901318,11.319211 -24.797672,8.983351 z M 59.915574,48.537595 C 58.150497,40.239431 58.132527,4.0604132 59.892744,2.5995512 62.270777,0.6259592 62.764637,17.878343 61.088767,44.380978 60.79261,49.064495 60.35638,50.610031 59.91556,48.537595 Z M 31.543715,37.889838 C 20.009596,29.62781 15.047464,24.847654 15.845692,22.767506 c 0.8034,-2.093626 5.530079,1.116462 15.626839,10.612849 4.911369,4.619329 5.426926,5.271739 4.917756,6.223136 -0.572744,1.070177 -1.337957,0.79961 -4.846572,-1.713653 z m 52.69642,1.726496 c -0.7873,-0.869956 -0.452054,-1.287546 5.58741,-6.959801 9.301153,-8.735631 13.523605,-11.545688 14.884615,-9.905768 1.27886,1.540929 -3.85447,6.561847 -14.670282,14.349029 -4.74699,3.417744 -4.918743,3.492244 -5.801743,2.51654 z M 42.82344,32.183428 C 40.610547,29.760105 32.881851,17.253642 31.508443,13.873664 30.027419,10.228843 31.14267,8.3077572 33.473427,10.488862 36.60941,13.423492 46.016367,31.279593 45.043784,32.451484 44.4659,33.147793 43.60967,33.044423 42.82344,32.183428 Z m 32.788328,0.255376 c -0.665327,-0.665326 -0.73735,-0.480046 3.381937,-8.69999 4.80423,-9.586721 7.946526,-14.1387208 9.760123,-14.1387208 2.45778,0 0.655257,4.7800448 -5.37572,14.2556668 -5.227567,8.213338 -6.609164,9.740222 -7.76634,8.583044 z M 53.765874,28.815483 C 52.59469,27.404295 49.066847,10.586377 49.06194,6.3909082 c -0.0042,-3.558916 1.133007,-4.590845 2.70811,-2.457481 1.893874,2.565114 4.985834,24.1429378 3.586497,25.0290298 -0.661286,0.41874 -1.159367,0.372719 -1.590673,-0.146974 z m 11.510267,0.07298 c -1.607277,-0.934209 1.628177,-22.9677558 3.727953,-25.3874838 3.379227,-3.894135 3.162667,5.219129 -0.45471,19.1352248 -1.733833,6.670074 -1.925276,7.03575 -3.273243,6.252259 z" />
    </Svg>
  );
}

export function GLogoLabel({ size, style }: GSHProps) {
  const scale = size / 120;
  return (
    <View style={ [{ alignSelf: 'center', height: size }, style] }>
      <GLogo size={ size } />
      <Text
        style={{
          ...RobotoCondensed.regular,
          fontSize: size/2.5,
          textTransform: 'uppercase',
          color: blue.regular,
          marginTop: -size/2.5*1.8,
          marginLeft: size/15
        }}>
        Gold Standard <Text
          style={{ color: gold.regular }}>Health</Text></Text>
    </View>
  );
}

export function GCompanyLogo({ company, size, style }: Props) {
  const scale = size;
  return (
    <View style={ [{ alignSelf: 'center' }, style] }>
      <Image source={logo[company]} style={{
            //flex: 1,
    maxWidth: ms(150),
    height: size,
    resizeMode: 'contain'

      }}/>
    </View>
  );
}

export default GLogo;
