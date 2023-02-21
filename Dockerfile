FROM docker.elastic.co/elasticsearch/elasticsearch:7.16.2
# 日本語解析用plugin
RUN elasticsearch-plugin install analysis-kuromoji