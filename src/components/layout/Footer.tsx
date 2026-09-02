import i18n from '../../i18n';
import { Container, FooterBar } from '../ui/layout';

export function Footer() {
  return (
    <FooterBar>
      <Container>{i18n.t('footer.text')}</Container>
    </FooterBar>
  );
}
