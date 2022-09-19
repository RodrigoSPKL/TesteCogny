	drop view if exists "public".vw_selectSUM cascade;

	create or replace view "public".vw_selectSUM as

	SELECT
		sum(regexp_replace(t.arr ->> 'Population', '[^0-9]+', '', 'g')::int) as SomaPopulation
	FROM(
		SELECT 
			jsonb_array_elements(a.doc_record -> 'data') as arr
		FROM "public".api_data a
	)t
	WHERE regexp_replace(t.arr ->> 'Year', '[^0-9]+', '', 'g')::int >= 2018