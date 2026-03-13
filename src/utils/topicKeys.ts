export function getTopicKey(
  subject: string,
  sectionTitle: string,
  topicName: string,
) {
  return `${subject}::${sectionTitle}::${topicName}`;
}
