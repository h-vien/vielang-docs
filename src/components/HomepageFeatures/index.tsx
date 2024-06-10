import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Dễ dàng sử dụng',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Cú pháp của VieLang giống JavaScript 96%, chỉ khác là nó hỗ trợ tiếng
        Việt :D
      </>
    ),
  },
  {
    title: 'Là ngôn ngữ thông dịch',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        VieLang được chuyển đổi thành mã nguồn JavaScript và chạy trên trình
        duyệt. JavaScript cũng là ngôn ngữ thông dịch, nó không được chuyển đổi
        ngay lập tức thành mã máy và sẽ được thông dịch từng dòng một trước khi
        nó được thực thi.
      </>
    ),
  },
  {
    title: 'Được viết bằng Typescript thuần',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Dự án được viết bằng Typescript thuần và không sử dụng thư viện ngoài,
        trừ các công cụ hỗ trợ đóng gói và kiểm thử.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
