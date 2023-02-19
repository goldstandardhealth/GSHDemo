import React from 'react';
import { View, Text, StyleProp, ViewStyle } from 'react-native';
import { ms } from 'react-native-size-matters';
import Svg, { Path, Mask } from 'react-native-svg'

type Props = {
  size: number;
  style?: StyleProp<ViewStyle>;
}

function GGear({ style, size }: Props) {
  return (
    <View style={ [{ height: size, width: size, justifyContent: 'center' }, style]} >
      <Svg
        style={{ alignSelf: 'center' }}
        height="25"
        width="25"
        transform={[ {scale: size/25} ]}
      >
        <Mask id="gearMasc" fill="white">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.9644 16.9935L2.18447 19.8529L5.09709 22.8758L7.8479 21.0784L9.70874 21.8137L10.356 25H14.5631L15.1294 21.8137L17.0712 21.0784L19.7411 22.7124L22.7346 19.7712L20.8738 17.1569L21.7638 15.1144L25 14.5425V10.3758L21.7638 9.72222L20.8738 7.84314L22.7525 5.03666L19.9492 2.20592L17.2032 4.05456L15.1294 2.94118L14.5631 0H10.4369L9.78961 3.26797L7.84786 4.00327L5.09709 2.20592L2.15428 5.18189L3.9644 7.84314L3.31715 9.72222L0 10.2941V14.5425L3.12684 15.1144L3.9644 16.9935ZM12.3785 18.5456C15.7298 18.5456 18.4465 15.8022 18.4465 12.4181C18.4465 9.03404 15.7298 6.29069 12.3785 6.29069C9.02727 6.29069 6.31055 9.03404 6.31055 12.4181C6.31055 15.8022 9.02727 18.5456 12.3785 18.5456Z"/>
        </Mask>
        <Path
          d="M2.18447 19.8529L1.3355 19.3245L0.923841 19.9858L1.46435 20.5468L2.18447 19.8529ZM3.9644 16.9935L4.81336 17.5219L5.0939 17.0712L4.87778 16.5863L3.9644 16.9935ZM5.09709 22.8758L4.37697 23.5697L4.95123 24.1657L5.64408 23.713L5.09709 22.8758ZM7.8479 21.0784L8.21539 20.1484L7.73411 19.9582L7.30091 20.2413L7.8479 21.0784ZM9.70874 21.8137L10.6887 21.6147L10.5807 21.083L10.0762 20.8837L9.70874 21.8137ZM10.356 25L9.376 25.1991L9.5387 26H10.356V25ZM14.5631 25V26H15.401L15.5477 25.175L14.5631 25ZM15.1294 21.8137L14.7753 20.8785L14.2443 21.0796L14.1449 21.6387L15.1294 21.8137ZM17.0712 21.0784L17.5932 20.2255L17.1753 19.9697L16.7171 20.1432L17.0712 21.0784ZM19.7411 22.7124L19.2191 23.5654L19.885 23.9729L20.4419 23.4257L19.7411 22.7124ZM22.7346 19.7712L23.4355 20.4846L24.0441 19.8865L23.5493 19.1914L22.7346 19.7712ZM20.8738 17.1569L19.957 16.7574L19.7311 17.2759L20.0591 17.7367L20.8738 17.1569ZM21.7638 15.1144L21.5897 14.1296L21.0613 14.223L20.847 14.7149L21.7638 15.1144ZM25 14.5425L25.174 15.5272L26 15.3813V14.5425H25ZM25 10.3758H26V9.55759L25.198 9.39561L25 10.3758ZM21.7638 9.72222L20.86 10.1503L21.0745 10.6032L21.5658 10.7024L21.7638 9.72222ZM20.8738 7.84314L20.0428 7.28685L19.7271 7.75837L19.97 8.27118L20.8738 7.84314ZM22.7525 5.03666L23.5835 5.59294L24.0382 4.91375L23.4631 4.33301L22.7525 5.03666ZM19.9492 2.20592L20.6598 1.50227L20.0774 0.914162L19.3908 1.37638L19.9492 2.20592ZM17.2032 4.05456L16.7302 4.93561L17.2614 5.22085L17.7617 4.8841L17.2032 4.05456ZM15.1294 2.94118L14.1475 3.13026L14.2374 3.59726L14.6564 3.82222L15.1294 2.94118ZM14.5631 0L15.5451 -0.189083L15.3889 -1H14.5631V0ZM10.4369 0V-1H9.61549L9.45591 -0.194284L10.4369 0ZM9.78961 3.26797L10.1437 4.20317L10.6627 4.00664L10.7706 3.46226L9.78961 3.26797ZM7.84786 4.00327L7.30087 4.84041L7.72651 5.11852L8.20199 4.93846L7.84786 4.00327ZM5.09709 2.20592L5.64407 1.36878L4.96033 0.922018L4.38603 1.50279L5.09709 2.20592ZM2.15428 5.18189L1.44323 4.47875L0.864622 5.06388L1.32743 5.7443L2.15428 5.18189ZM3.9644 7.84314L4.90988 8.16881L5.07307 7.69505L4.79126 7.28073L3.9644 7.84314ZM3.31715 9.72222L3.48705 10.7077L4.06999 10.6072L4.26264 10.0479L3.31715 9.72222ZM0 10.2941L-0.169899 9.30866L-1 9.45177V10.2941H0ZM0 14.5425H-1V15.3762L-0.179914 15.5262L0 14.5425ZM3.12684 15.1144L4.04022 14.7073L3.82552 14.2256L3.30676 14.1307L3.12684 15.1144ZM3.03343 20.3814L4.81336 17.5219L3.11544 16.465L1.3355 19.3245L3.03343 20.3814ZM5.8172 22.182L2.90458 19.1591L1.46435 20.5468L4.37697 23.5697L5.8172 22.182ZM7.30091 20.2413L4.5501 22.0387L5.64408 23.713L8.39489 21.9156L7.30091 20.2413ZM10.0762 20.8837L8.21539 20.1484L7.4804 22.0085L9.34125 22.7438L10.0762 20.8837ZM11.336 24.8009L10.6887 21.6147L8.72875 22.0128L9.376 25.1991L11.336 24.8009ZM14.5631 24H10.356V26H14.5631V24ZM14.1449 21.6387L13.5785 24.825L15.5477 25.175L16.114 21.9887L14.1449 21.6387ZM16.7171 20.1432L14.7753 20.8785L15.4836 22.7489L17.4253 22.0136L16.7171 20.1432ZM20.2631 21.8595L17.5932 20.2255L16.5492 21.9314L19.2191 23.5654L20.2631 21.8595ZM22.0338 19.0579L19.0403 21.9991L20.4419 23.4257L23.4355 20.4846L22.0338 19.0579ZM20.0591 17.7367L21.9199 20.3511L23.5493 19.1914L21.6885 16.577L20.0591 17.7367ZM20.847 14.7149L19.957 16.7574L21.7905 17.5563L22.6805 15.5138L20.847 14.7149ZM24.826 13.5577L21.5897 14.1296L21.9378 16.0991L25.174 15.5272L24.826 13.5577ZM24 10.3758V14.5425H26V10.3758H24ZM21.5658 10.7024L24.802 11.356L25.198 9.39561L21.9617 8.74201L21.5658 10.7024ZM19.97 8.27118L20.86 10.1503L22.6675 9.29418L21.7775 7.4151L19.97 8.27118ZM21.9215 4.48037L20.0428 7.28685L21.7048 8.39942L23.5835 5.59294L21.9215 4.48037ZM19.2387 2.90957L22.042 5.74031L23.4631 4.33301L20.6598 1.50227L19.2387 2.90957ZM17.7617 4.8841L20.5077 3.03546L19.3908 1.37638L16.6448 3.22502L17.7617 4.8841ZM14.6564 3.82222L16.7302 4.93561L17.6762 3.17352L15.6025 2.06013L14.6564 3.82222ZM13.5811 0.189083L14.1475 3.13026L16.1114 2.75209L15.5451 -0.189083L13.5811 0.189083ZM10.4369 1H14.5631V-1H10.4369V1ZM10.7706 3.46226L11.4178 0.194284L9.45591 -0.194284L8.80866 3.07369L10.7706 3.46226ZM8.20199 4.93846L10.1437 4.20317L9.43547 2.33278L7.49372 3.06807L8.20199 4.93846ZM4.5501 3.04306L7.30087 4.84041L8.39485 3.16613L5.64407 1.36878L4.5501 3.04306ZM2.86534 5.88502L5.80815 2.90905L4.38603 1.50279L1.44323 4.47875L2.86534 5.88502ZM4.79126 7.28073L2.98114 4.61948L1.32743 5.7443L3.13754 8.40555L4.79126 7.28073ZM4.26264 10.0479L4.90988 8.16881L3.01892 7.51747L2.37167 9.39655L4.26264 10.0479ZM0.169899 11.2796L3.48705 10.7077L3.14725 8.73676L-0.169899 9.30866L0.169899 11.2796ZM1 14.5425V10.2941H-1V14.5425H1ZM3.30676 14.1307L0.179914 13.5588L-0.179914 15.5262L2.94693 16.0981L3.30676 14.1307ZM4.87778 16.5863L4.04022 14.7073L2.21347 15.5215L3.05102 17.4006L4.87778 16.5863ZM17.4465 12.4181C17.4465 15.2592 15.1683 17.5456 12.3785 17.5456V19.5456C16.2912 19.5456 19.4465 16.3453 19.4465 12.4181H17.4465ZM12.3785 7.29069C15.1683 7.29069 17.4465 9.57711 17.4465 12.4181H19.4465C19.4465 8.49098 16.2912 5.29069 12.3785 5.29069V7.29069ZM7.31055 12.4181C7.31055 9.57711 9.58873 7.29069 12.3785 7.29069V5.29069C8.46581 5.29069 5.31055 8.49098 5.31055 12.4181H7.31055ZM12.3785 17.5456C9.58873 17.5456 7.31055 15.2592 7.31055 12.4181H5.31055C5.31055 16.3453 8.46581 19.5456 12.3785 19.5456V17.5456Z"
          fill="black"
          mask="url(#gearMasc)"
          />
      </Svg>
    </View>
  );
}

export default GGear;
