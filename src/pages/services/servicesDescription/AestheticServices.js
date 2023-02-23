import {
  LargeContainerFlex,
  ResponsiveItemsContainer,
  ItemTitle,
  ItemDescription,
} from "components/CommonStyles";
import ProminentTitle from "components/ProminentTitle";
import ServiceItem from "pages/services/servicesDescription/ServiceItem";
import bath_500x333_c from "assets/bath_500x333_c.jpg";
import clipping_nails_500x333_c from "assets/clipping_nails_500x333_c.jpg";
import haircut_500x333_c from "assets/haircut_500x333_c.jpg";

const AestheticServices = () => {
  return (
    <LargeContainerFlex className='generic'>
      <ProminentTitle>Estética y aseo</ProminentTitle>
      <ResponsiveItemsContainer>
        <ServiceItem
          src={bath_500x333_c}
          alt='bath'
          pathDefinition='M0,40L48,33.3C96,27,192,13,288,15C384,17,480,33,576,36.7C672,40,768,30,864,23.3C960,17,1056,13,1152,25C1248,37,1344,63,1440,70C1536,77,1632,63,1728,53.3C1824,43,1920,37,2016,35C2112,33,2208,37,2304,33.3C2400,30,2496,20,2592,26.7C2688,33,2784,57,2880,65C2976,73,3072,67,3168,66.7C3264,67,3360,73,3456,73.3C3552,73,3648,67,3744,58.3C3840,50,3936,40,4032,38.3C4128,37,4224,43,4320,45C4416,47,4512,43,4608,43.3C4704,43,4800,47,4896,53.3C4992,60,5088,70,5184,75C5280,80,5376,80,5472,70C5568,60,5664,40,5760,33.3C5856,27,5952,33,6048,36.7C6144,40,6240,40,6336,38.3C6432,37,6528,33,6624,33.3C6720,33,6816,37,6864,38.3L6912,40L6912,100L6864,100C6816,100,6720,100,6624,100C6528,100,6432,100,6336,100C6240,100,6144,100,6048,100C5952,100,5856,100,5760,100C5664,100,5568,100,5472,100C5376,100,5280,100,5184,100C5088,100,4992,100,4896,100C4800,100,4704,100,4608,100C4512,100,4416,100,4320,100C4224,100,4128,100,4032,100C3936,100,3840,100,3744,100C3648,100,3552,100,3456,100C3360,100,3264,100,3168,100C3072,100,2976,100,2880,100C2784,100,2688,100,2592,100C2496,100,2400,100,2304,100C2208,100,2112,100,2016,100C1920,100,1824,100,1728,100C1632,100,1536,100,1440,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z'
        >
          <ItemTitle>Baños</ItemTitle>
          <ItemDescription>
            Incluye un baño con champú especial para mascotas y secado con aire
            caliente.
          </ItemDescription>
        </ServiceItem>
        <ServiceItem
          src={clipping_nails_500x333_c}
          alt='clipping nails'
          pathDefinition='M0,0L26.7,11.7C53.3,23,107,47,160,46.7C213.3,47,267,23,320,15C373.3,7,427,13,480,23.3C533.3,33,587,47,640,46.7C693.3,47,747,33,800,25C853.3,17,907,13,960,20C1013.3,27,1067,43,1120,48.3C1173.3,53,1227,47,1280,38.3C1333.3,30,1387,20,1440,15C1493.3,10,1547,10,1600,18.3C1653.3,27,1707,43,1760,41.7C1813.3,40,1867,20,1920,18.3C1973.3,17,2027,33,2080,40C2133.3,47,2187,43,2240,43.3C2293.3,43,2347,47,2400,50C2453.3,53,2507,57,2560,50C2613.3,43,2667,27,2720,30C2773.3,33,2827,57,2880,60C2933.3,63,2987,47,3040,45C3093.3,43,3147,57,3200,60C3253.3,63,3307,57,3360,60C3413.3,63,3467,77,3520,78.3C3573.3,80,3627,70,3680,63.3C3733.3,57,3787,53,3813,51.7L3840,50L3840,100L3813.3,100C3786.7,100,3733,100,3680,100C3626.7,100,3573,100,3520,100C3466.7,100,3413,100,3360,100C3306.7,100,3253,100,3200,100C3146.7,100,3093,100,3040,100C2986.7,100,2933,100,2880,100C2826.7,100,2773,100,2720,100C2666.7,100,2613,100,2560,100C2506.7,100,2453,100,2400,100C2346.7,100,2293,100,2240,100C2186.7,100,2133,100,2080,100C2026.7,100,1973,100,1920,100C1866.7,100,1813,100,1760,100C1706.7,100,1653,100,1600,100C1546.7,100,1493,100,1440,100C1386.7,100,1333,100,1280,100C1226.7,100,1173,100,1120,100C1066.7,100,1013,100,960,100C906.7,100,853,100,800,100C746.7,100,693,100,640,100C586.7,100,533,100,480,100C426.7,100,373,100,320,100C266.7,100,213,100,160,100C106.7,100,53,100,27,100L0,100Z'
        >
          <ItemTitle>Corte de uñas</ItemTitle>
          <ItemDescription>
            Recorta las uñas de tu mascota para prevenir daños en muebles y
            alfombras.
          </ItemDescription>
        </ServiceItem>
        <ServiceItem
          src={haircut_500x333_c}
          alt='haircut'
          pathDefinition='M0,90L60,80C120,70,240,50,360,35C480,20,600,10,720,11.7C840,13,960,27,1080,36.7C1200,47,1320,53,1440,48.3C1560,43,1680,27,1800,28.3C1920,30,2040,50,2160,50C2280,50,2400,30,2520,18.3C2640,7,2760,3,2880,6.7C3000,10,3120,20,3240,33.3C3360,47,3480,63,3600,63.3C3720,63,3840,47,3960,35C4080,23,4200,17,4320,13.3C4440,10,4560,10,4680,16.7C4800,23,4920,37,5040,43.3C5160,50,5280,50,5400,43.3C5520,37,5640,23,5760,18.3C5880,13,6000,17,6120,25C6240,33,6360,47,6480,48.3C6600,50,6720,40,6840,35C6960,30,7080,30,7200,28.3C7320,27,7440,23,7560,30C7680,37,7800,53,7920,56.7C8040,60,8160,50,8280,53.3C8400,57,8520,73,8580,81.7L8640,90L8640,100L8580,100C8520,100,8400,100,8280,100C8160,100,8040,100,7920,100C7800,100,7680,100,7560,100C7440,100,7320,100,7200,100C7080,100,6960,100,6840,100C6720,100,6600,100,6480,100C6360,100,6240,100,6120,100C6000,100,5880,100,5760,100C5640,100,5520,100,5400,100C5280,100,5160,100,5040,100C4920,100,4800,100,4680,100C4560,100,4440,100,4320,100C4200,100,4080,100,3960,100C3840,100,3720,100,3600,100C3480,100,3360,100,3240,100C3120,100,3000,100,2880,100C2760,100,2640,100,2520,100C2400,100,2280,100,2160,100C2040,100,1920,100,1800,100C1680,100,1560,100,1440,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z'
        >
          <ItemTitle>Cortes de pelo</ItemTitle>
          <ItemDescription>
            Incluye un corte de pelo y peinado personalizado para tu mascota.
          </ItemDescription>
        </ServiceItem>
      </ResponsiveItemsContainer>
    </LargeContainerFlex>
  );
};

export default AestheticServices;
